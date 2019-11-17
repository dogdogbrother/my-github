import App, { Container } from 'next/app'

import Header from '../components/header'

import 'antd/dist/antd.css'
import '../style/global-style.css'
import '../style/reset-style.css'

class MyApp extends App {
    render() {
        const { Component } = this.props

        return (
            <Container>
                <Header></Header>
                <Component></Component>
            </Container>
        )
    }
}

export default MyApp