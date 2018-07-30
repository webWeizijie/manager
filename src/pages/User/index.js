import React from 'react'
import { Card, Button, Table, Form, Input, Checkbox, Select, Radio, Icon, message, Modal, DatePicker } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'
import Moment from 'moment'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const confirm = Modal.confirm;

class SubmitInput extends React.Component {
    getInputInfo = () => {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="inline" onSubmit={this.getInputInfo}>
                    <FormItem>
                        {
                            getFieldDecorator('userName', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名不能为空'
                                    }
                                ]
                            })(
                                <Input style={{ width: '165px' }} placeholder="请输入用户名" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true,
                                        message: '密码不能为空'
                                    }
                                ]
                            })(
                                <Input style={{ width: '165px' }} placeholder="请输入密码" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary">登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

SubmitInput = Form.create()(SubmitInput)

class UserForm extends React.Component {

    getState = (state) => {
        return {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子一枚',
            '4': '百度FE',
            '5': '创业者'
        }[state]
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        const userInfo = this.props.userInfo || {};
        const type = this.props.type;
        return (
            <Form layout="horizontal">
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? userInfo.username :
                            getFieldDecorator('user_name', {
                                initialValue: userInfo.username
                            })(
                                <Input type="text" placeholder="请输入姓名" />
                            )
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? userInfo.sex == 1 ? '男' : '女' :
                            getFieldDecorator('sex', {
                                initialValue: userInfo.sex
                            })(
                                <RadioGroup>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGroup>
                            )}
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? this.getState(userInfo.state) :
                            getFieldDecorator('state', {
                                initialValue: userInfo.state
                            })(
                                <Select>
                                    <Option value={1}>咸鱼一条</Option>
                                    <Option value={2}>风华浪子</Option>
                                    <Option value={3}>北大才子一枚</Option>
                                    <Option value={4}>百度FE</Option>
                                    <Option value={5}>创业者</Option>
                                </Select>
                            )}
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? userInfo.birthday :
                            getFieldDecorator('birthday', {
                                initialValue: Moment(userInfo.birthday)
                            })(
                                <DatePicker />
                            )}
                </FormItem>
                <FormItem label="联系地址" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? userInfo.address :
                            getFieldDecorator('address', {
                                initialValue: userInfo.address
                            })(
                                <Input.TextArea rows={3} placeholder="请输入联系地址" />
                            )}
                </FormItem>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);

export default class User extends React.Component {
    state = {
        page: 1,
        selectedRowKeys: 0,
        title:'',
        isVisible:false
    }
    handleOperator = (type) => {
        let item = this.state.list[this.state.selectedRowKeys - 1];
        if (type == 'create') {
            this.setState({
                title: '创建员工',
                isVisible: true,
                type
            })
        } else if (type == "edit" || type == 'detail') {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个用户'
                })
                return;
            }
            this.setState({
                title: type == 'edit' ? '编辑用户' : '查看详情',
                isVisible: true,
                userInfo: item,
                type
            })
        } else if (type == "delete") {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个用户'
                })
                return;
            }
            confirm({
                content: '确定要删除此用户吗？',
                onOk: () => {
                    axios.ajax({
                        url: 'https://www.easy-mock.com/mock/5b5682d249fe496f1b579773/manager/delete',
                        data: {
                            params: {
                                id: item.id
                            }
                        }
                    }).then((res) => {
                        if (res.code == 0) {
                            this.setState({
                                isVisible: false
                            })
                            this.getUserList();
                        }
                    })
                }
            })
        }
    }
    componentDidMount() {
        this.getUserList()
    }
    getUserList = ()=> {
        axios.ajax({
            url: 'https://www.easy-mock.com/mock/5b5682d249fe496f1b579773/manager/list1',
            data: {
                params: {
                    page: this.state.page
                }
            }
        }).then((res) => {
            console.log(res, 'res')
            const list = res.result.list
            list.forEach((item) => {
                item.key = item.id
            })

            this.setState({
                list,
                isVisible: false,
                userInfo: ''
            })
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const rowSelection = {
            onChange: (selectedRowKeys) => {
                this.setState({
                    selectedRowKeys
                })
            },
            type: 'radio',
            selectedRowKeys: this.state.selectedRowKeys
        }
        return (
            <div>
                <Card className='card-wrap'>
                    <SubmitInput />
                </Card>
                <Card className='card-wrap' style={{ margin: '20px 0px 0px 0px' }}>
                    <Button type="primary" onClick={() => {
                        this.handleOperator('create')
                    }}>创建员工</Button>
                    <Button type="primary" onClick={() => {
                        this.handleOperator('edit')
                    }}>编辑员工</Button>
                    <Button type="primary" onClick={() => {
                        this.handleOperator('detail')
                    }}>员工详情</Button>
                    <Button type="danger" onClick={() => {
                        this.handleOperator('delete')
                    }}>删除员工</Button>
                </Card>
                <div style={{ background: '#ffffff' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.setState({
                                        selectedRowKeys: [index + 1]
                                    })
                                },
                            };
                        }}>

                    </Table>
                </div>
                <Modal
                    title={this.state.title}
                    visible={this.state.isVisible}
                    onOk={this.getUserList}
                    width={800}
                    onCancel={() => {
                       // this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible: false,
                            userInfo: ''
                        })
                    }}
                >
                    <UserForm userInfo={this.state.userInfo} type={this.state.type} wrappedComponentRef={(inst) => this.userForm = inst }></UserForm>
                </Modal>
            </div>
        )
    }
}