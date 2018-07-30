import React from 'react'
import { Card, Form, Select, Button, Table,Modal,message } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'
import BaseFrom from '../../components/BaseFrom/index'
const FormItem = Form.Item
const Option = Select.Option;

export default class Order extends React.Component {
    state = {
        orderInfo: {},
        orderConfirmVisble: false,
        list: [],
        selectedRowKeys: '',

    }
    params = {
        page: 1
    }
    componentWillMount() {
        this.requestList()
    }
    openOrderDetail = ()=>{
        let item = this.state.list[this.state.selectedRowKeys];
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请先选择一条订单'
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    requestList = () => {
        let _this = this;
        axios.ajax({
            url: 'https://www.easy-mock.com/mock/5b5682d249fe496f1b579773/manager/orderList',
            data: {
                params: this.params
            }
        }).then((res) => {
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });
            this.setState({
                selectedRowKeys:'',
                list,
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }
    getCardList = () => {

    }
    onRowClick = (record, index) => {
       
        this.setState({
            selectedRowKeys: [index]
        })
    }
    showModoul = ()=>{
        if (!this.state.list[this.state.selectedRowKeys]) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        if (this.state.list[this.state.selectedRowKeys].status == 2) {
            Modal.info({
                title: '温馨提示',
                content: '订单已结束'
            })
            return;
        }
        axios.ajax({
            url:'https://www.easy-mock.com/mock/5b5682d249fe496f1b579773/manager/ebike_info',
            data:{
                params:{
                    id:this.state.list[this.state.selectedRowKeys].id
                }
            }
        }).then((res)=>{
            this.setState({
                orderInfo:res.result,
                orderConfirmVisble:true
            })
        })
    }
    handleFilter = (params) => {
        this.params = params
        this.requestList()
    }
    handleFinishOrder = ()=>{
        axios.ajax({
            url:'https://www.easy-mock.com/mock/5b5682d249fe496f1b579773/manager/finish_order',
            data:{
                params:{
                    id:this.state.orderInfo.id
                }
            }
        }).then((res)=>{
            message.success('订单结束成功')
                this.setState({
                    orderConfirmVisble: false
                })
                this.requestList();
        })
    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                render(state){
                    return state == 1? "进行中":"结束"
                }
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const formItemLayout = {
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys
                })
            }
        }
        return (
            <div>
                <Card className='card-wrap'>
                    <BaseFrom  filterSubmit={this.handleFilter} />
                </Card>
                <Card>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" onClick={this.showModoul}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table size="default" bordered columns={columns} dataSource={this.state.list} pagination={this.state.pagination} rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }} />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisble}
                    onCancel={() => {
                        this.setState({
                            orderConfirmVisble: false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

