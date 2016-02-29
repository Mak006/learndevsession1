// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/dojo/dojo.d.ts" />

import xhr = require("dojo/request/xhr");

export interface IFriendProps {
    id?: number,
    initials: string,
    name: string,
    courseCount: number,
    articleCount: number,
    key?:number
}

export interface IFriendsProps {
    initialData: IFriendProps[]
}

export class FriendCard extends React.Component<IFriendProps, {}> {
    render() {
        return (
            <div className="friend">
                <div className="img-circle friend-initials">
                    <h4>{this.props.initials}</h4>
                    </div>
                <div className="friend-name">{this.props.name}</div>
                <div className="friend-details">
                    <div>{this.props.courseCount} courses taken</div>
                    <div>{this.props.articleCount} articles reviewed</div>
                    </div>
                </div>
        );
    }
}

export class Friends extends React.Component<IFriendsProps, {}> {
    state = {
        data: this.props.initialData
    }
    getData() {
        let options: any = {
            handleAs: "json",
            headers: {
                "X-Requested-With": null
            }
        };
        let promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends", options);
        promise.then((data:any[]) => {
            data = data.map((value, idx) => {
                value.courseCount = value.coursesCount;
                value.articleCount = value.articlesCount;
                return value;
            });
            this.setState({
                data: data
            });
        }, () => {
            console.log("error with the call");
        });
    }
    render() {
        let friendsList:any[] = [];
        this.state.data.forEach((frd, idx) => {
            friendsList.push(<FriendCard key={frd.id} initials={frd.initials} name={frd.name} courseCount={frd.courseCount} articleCount={frd.articleCount}  />);
        });


        return (
            <div>
                {friendsList}
            </div>    
        );
    }
}

//ReactDOM.render(<FriendCard initials="LP" name="Last Person" articleCount={14} courseCount={33} />, document.getElementById('test'));



