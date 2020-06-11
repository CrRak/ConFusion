import React from 'react';
import { Card, CardImg,  CardBody, CardTitle,CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'; 
import { Link } from 'react-router-dom';


    

    const DishDetail = (props) => {
        if(props.dish!= null){
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                    </div>
                </div>
                    <div className="row">
                            <RenderDish dish = {props.dish} />                      
                            <RenderComments comments = {props.comments} />
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    function RenderComments({comments}){

        if(comments.length!==0){
        const cmt = comments.map((cmt) => {
            return (
              <div key={cmt.id} className="col-12 mt-5">
                <div> { cmt.comment } </div>
                <div> --- {cmt.author} {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(cmt.date)))}</div>
              </div>
            );
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                <ul class = "list-unstyled">
                    <li >
                        { cmt }
                    </li>
                </ul>
            </div>
        )
    }
        else {
            return(
                <div> NO comments kiddy </div>
            )
        }

        
           
    }
        

    


export default DishDetail;