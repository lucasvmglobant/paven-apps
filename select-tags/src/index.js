import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg } from 'reactstrap';
import '../components/SideBar.css';
import { Link } from 'react-router-dom';
import Client from '../Contentful';

class Sidebar extends React.Component {
    state = {
        tags: []
    };

    async componentDidMount() {

        const tags = response.items.map((item) => {
            const { name} = item.fields;
            return {
                name,
            };
        });

        this.setState({
            tags
        });
    }

    getFilteredtags = () => {
        if (!this.props.activeShip) {
            return this.state.tags;
        }

        return this.state.tags.filter((ship) => this.props.activeShip.name.toLowerCase() === ship.name.toLowerCase());
    };

    render() {
        return (
            <div className="map-sidebar">
                {this.props.activeShipTypes}
                <pre>
{this.getFilteredtags().map((ship) => {
  console.log(ship);

  return (
    <Card className="mb-2">
        <CardImg />
        <CardBody>
            <CardTitle>
                <h3 className="thick">{tag.name}</h3>
            </CardTitle>
            <CardText>
                <br />
                <h6>Project Details</h6>
                <p>For a description of the project view the specification included</p>
            </CardText>
            <div class="btn-toolbar">
                <SpecsButton />
                <Link to="/vessels/Atchafalaya" className="btn btn-primary">
                    Go to vessel
                </Link>
            </div>
        </CardBody>
    </Card>
  )
})}

                </pre>
            </div>
        );
    }
}

export default Sidebar;