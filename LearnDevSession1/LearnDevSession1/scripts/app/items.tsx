// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../../typings/react/react-global.d.ts" />

interface IItemProp {
    title: string,
    description: string,
    rating: number,
    link: string,
    key?:number
}

interface IItemsState {
    items: IItemProp[]
}

class ItemCard extends React.Component<IItemProp, {}> {
    formatRating() {
        return this.props.rating.toFixed(1);
    }

    render() {
        return (
            <div className="row record">
                    <div className="record-detail">
                        <div className="record-title">
                            <a href={this.props.link}>{this.props.title}</a>
                            </div>
                        <div className="record-description">
                            {this.props.description}
                            </div>
                        </div>
                    <div className="record-rating">
                       {this.formatRating() }
                        </div>
                </div>
        );
    }
}

class ItemsCard extends React.Component<{}, IItemsState> {
    constructor(args) {
        super(args);
        this.state = { items: [] };
    }

    updateData(newValue: IItemProp[]) {
        this.setState({ items: newValue });
    }

    render() {

        let itemList: any[] = [];
        this.state.items.forEach((frd, idx) => {
            itemList.push(<ItemCard key={idx} description={frd.description} link={frd.link} rating={frd.rating} title={frd.title}   />);
        });

        return (
            <div>
                {itemList}
                </div>
        );
    }
}
console.log("initializing the card");
var myCourse = ReactDOM.render(<ItemsCard />, document.getElementById("myCourses")) as ItemsCard;
debugger;
var courses: IItemProp[] = [];
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
console.log("updating the card");
myCourse.updateData(courses);
