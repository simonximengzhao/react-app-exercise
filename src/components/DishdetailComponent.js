import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    renderDish(dish) {
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

    renderComments(dish) {
        if (dish != null) {
            function getList(dish) {
                let list = [];
                for (let i = 0; i < dish.comments.length; i++) {
                    list.push(dish.comments[i].comment );
                    let new_date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[i].date)));
                    list.push("--" + dish.comments[i].author + ", " + new_date);
                }
                return list;
            };
        
            let comment_list = getList(dish);
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

    render() {
        let dish = this.props.dish
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetail;