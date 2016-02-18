// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../../typings/react/react-global.d.ts" />

interface IFriendProps {
    id?: number,
    initials: string,
    name: string,
    courseCount: number,
    articleCount: number,
    key?:number
}

interface IFriendsProps {
    initialData: IFriendProps[]
}

class FriendCard extends React.Component<IFriendProps, {}> {
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

class Friends extends React.Component<IFriendsProps, {}> {
    render() {
        let friendsList:any[] = [];
        this.props.initialData.forEach((frd, idx) => {
            friendsList.push(<FriendCard key={frd.id} initials={frd.initials} name={frd.name} courseCount={frd.courseCount} articleCount={frd.articleCount}  />);
        });


        return (
            <div>
                {friendsList}
            </div>    
        );
    }
}

var friendsData: IFriendProps[] = [
    { id: 1, name: "Homer Simpson", initials: "HS", courseCount: 32, articleCount: 19 },
    { id: 2, name: "Marge Simpson", initials: "MS", courseCount: 22, articleCount: 13 },
    { id: 3, name: "Bart Simpson", initials: "BS", courseCount: 12, articleCount: 10 }
];

ReactDOM.render(<Friends initialData={friendsData} />, document.getElementById('friendsNode'));
//ReactDOM.render(<FriendCard initials="LP" name="Last Person" articleCount={14} courseCount={33} />, document.getElementById('test'));



