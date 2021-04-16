import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
    if (dish != null) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

function RenderComments({comments}) {
    if (comments != null) {
        function getList(comments) {
            let list = [];
            for (let i = 0; i < comments.length; i++) {
                list.push(comments[i].comment );
                let new_date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[i].date)));
                list.push("--" + comments[i].author + ", " + new_date);
            }
            return list;
        };
    
        let comment_list = getList(comments);
        let html = comment_list.map((comment_list) => {
            return (
                <li key={comment_list} className="mt-3">
                    { comment_list }
                </li>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { html }
                </ul>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }

}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;