import React, { Component }from 'react';
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Button } from 'reactstrap'
import axios from 'axios';

class CommentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func,
        // username: PropTypes.string,
        OnUsernameOnBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor (props) {
        super(props)
        this.state = {
            username: props.username,
            content: ''
        }
    }
    componentDidMount() {
        axios
          .get("https://randomuser.me/api/?inc=name")
          .then(response =>  {
            var userName1;
            response.data.results.forEach(user => {
                userName1 = `${user.name.first} ${user.name.last}`
              
            })
            this.setState({
                username: userName1,
            }) 
            }
          )
          
          .catch(error => this.setState({ error, isLoading: false }));          
      }
    handleOnSubmit() {
        if (this.props.onSubmit)
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        this.setState({content: ''})
    }

    handleOnUserNameChange(event) {
        this.setState({ username: event.target.value })
    }

    handleOnContentChange(event) {
        this.setState({ content: event.target.value })
    }

    handleUsernameOnBlur() {
        if (this.props.OnUsernameOnBlur)
            this.props.OnUsernameOnBlur(this.state.username)
    }


    render() {
        console.log("username:" ,this.state.username);
        console.log("username:" ,this.state.username);
        return (
            <div className='comment-input'>
                <Form className='card-body'>
                    <FormGroup >
                        <Label for="exampleText">Username</Label>
                        <input type="text"
                               onChange={this.handleOnUserNameChange.bind(this)}
                               value={this.state.username}
                               className='form-control'
                               onBlur={this.handleUsernameOnBlur.bind(this)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Content</Label>
                        <textarea type="textarea"
                                  value={this.state.content}
                                  onChange={this.handleOnContentChange.bind(this)}
                                  className='form-control'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.handleOnSubmit.bind(this)}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default CommentInput