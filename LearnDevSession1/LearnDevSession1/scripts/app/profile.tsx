// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


interface IProfileTextBoxProp {
    value: number,
    editable: boolean,
    onChange(e: any)
}


class ProfileTextBox extends React.Component<IProfileTextBoxProp, {}> {



    render() {
        let pHidden = this.props.editable ? " hidden" : "";
        let inputHidden = this.props.editable ? "" : " hidden";
        return (
            <div>
                <p className={"form-control-static" + pHidden}>{this.props.value}</p>
                <input type="text" value={this.props.value.toString()} className={"form-control" + inputHidden} onChange={this.props.onChange} />
             </div>
            );
    }
}

interface IProfileButtonProp {
    onClick(e: React.MouseEvent),
    label: string,
    iconClass: string
}

class ProfileButton extends React.Component<IProfileButtonProp, {}> {
    render() {
        return (
            <button className={"btn btn-block " + this.props.iconClass} onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

interface IProfileProp {
    
}
interface IProfileState {
    courses?: number,
    articles?: number,
    editable?: boolean
}
class Profile extends React.Component<IProfileProp, IProfileState> {
    constructor(args) {
        super(args);
        this.state = {
            courses: 14,
            articles: 22,
            editable: false
        }
    }
    editClickHandler(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            editable: true
        });
    }
    cancelClickHandler(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            editable: false
        });
    }
    coursesChangeHandler(e: any) {
        this.setState({
            courses: parseInt(e.target.value)
        });
    }
    articleChangeHandler(e: any) {
        this.setState({
            articles: parseInt(e.target.value)
        });
    }
    render() {
        let editButtonHidden = this.state.editable ? " hidden" : " ";
        let saveCancelButtonHidden = this.state.editable ? "" : " hidden";
        return (
            <div>
                <div>
                    <label>Courses</label>
                    <ProfileTextBox value={this.state.courses} editable={this.state.editable} onChange={(e) => this.coursesChangeHandler(e)} />
                </div>
                <div>
                    <label>Articles</label>
                    <ProfileTextBox value={this.state.articles} editable={this.state.editable} onChange={(e) => this.articleChangeHandler(e)} />
                </div>
                <div className="profile-buttons row">
                    <div className={"col-md-6 col-md-push-6" + editButtonHidden}>
                        <ProfileButton iconClass={"btn-primary"} label="Edit" onClick={this.editClickHandler.bind(this)} />
                        </div>
                    <div className={"col-md-6" + saveCancelButtonHidden}>
                        <ProfileButton iconClass={"btn-primary"} label="Save" onClick={this.cancelClickHandler.bind(this)} />
                        </div>
                    <div className={"col-md-6" + saveCancelButtonHidden}>
                        <ProfileButton iconClass={"btn-danger"} label="Cancel" onClick={this.cancelClickHandler.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Profile />, document.getElementById('profileNode'));
