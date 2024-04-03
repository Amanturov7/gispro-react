import React, { Component } from 'react';
import emailjs from '@emailjs/browser';
import './FeedbackForm.css'; 

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iv4fujq', 'template_kafemik', e.target, 'MA_tIBIhJOCzuuUes')
            .then((result) => {
                console.log('Email successfully sent:', result.text);
            }, (error) => {
                console.error('Error sending email:', error.text);
            });

        this.setState({
            name: '',
            email: '',
            message: '',
        });
    }

    render() {
        return (
            <section id="contact">
                <div className="feedback-container">
                    <div className="feedback-text">
                        <h2>Свяжитесь с нами</h2>
                        <p>Если у вас есть вопросы или комментарии, пожалуйста, заполните форму ниже.</p>
                    </div>
                    <div className="feedback-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Сообщение</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <button className='btn btn-primary btn-lg js-scroll-trigger' type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeedbackForm;
