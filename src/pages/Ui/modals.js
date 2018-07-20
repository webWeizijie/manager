import React from 'react'
import { Card, Button, Modal } from 'antd'

const confirm = Modal.confirm;
export default class Modals extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: false, modal1Visible: false,
            modal2Visible: false,
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    }

    handleOk1 = () => {
        this.setState({ loading1: true });
        setTimeout(() => {
            this.setState({ loading1: false, visible1: false });
        }, 3000);
    }

    handleCancel1 = () => {
        this.setState({ visible1: false });
    }
    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    info() {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() { },
        });
    }

    success() {
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...',
        });
    }

    error() {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    }

    warning() {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    }

    showConfirm() {
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className='card-wrap'>
                    <Button type="primary" onClick={this.showModal}>Open</Button>
                    <Button type="primary" onClick={this.showModal1}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.setModal1Visible(true)}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.setModal2Visible(true)}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    visible={this.state.visible1}
                    title="Title"
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                    footer={[
                        <Button key="back" onClick={this.handleCancel1}>Return</Button>,
                        <Button key="submit" type="primary" loading={this.state.loading1} onClick={this.handleOk1}>
                            Submit
                        </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    title="20px to Top"
                    style={{ top: 20 }}
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
                <Modal
                    title="Vertically centered modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>

                <Card title="信息确认框" className='card-wrap'>
                    <Button onClick={this.showConfirm.bind(this)}>Confirm</Button>
                    <Button onClick={this.info.bind(this)}>Info</Button>
                    <Button onClick={this.success.bind(this)}>Success</Button>
                    <Button onClick={this.error.bind(this)}>Error</Button>
                    <Button onClick={this.warning.bind(this)}>Warning</Button>
                </Card>
            </div>
        )
    }
}