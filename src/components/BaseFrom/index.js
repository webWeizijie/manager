import React from 'react'
import { Form, Select, DatePicker, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option;

class BaseOrder extends React.Component {
    handleSubmit = () => {
        const value = this.props.form.getFieldsValue()
        this.props.filterSubmit(value)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="inline">
                    <FormItem
                        label="城市"
                    >
                        {getFieldDecorator('city', {
                            initialValue: 'jack',
                            rules: [{
                                required: true, message: '请选择城市',

                            }],
                        })(
                            <Select style={{ width: 80 }}>
                                <Option value="jack">全部</Option>
                                <Option value="lucy">北京</Option>
                                <Option value="disabled">上海</Option>
                                <Option value="Yiminghe">天津</Option>
                                <Option value="hangzhou">杭州</Option>
                            </Select>
                        )}

                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('startTime', {

                        })(
                            <DatePicker placeholder='选择开始时间' />
                        )}
                        <span>~ </span>
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('endTime', {

                        })(
                            <DatePicker placeholder='选择结束时间' />
                        )}

                    </FormItem>
                    <FormItem
                        label="订单状态"
                    >
                    {getFieldDecorator('orderState', {
                            initialValue: 'all'
                        })(
                            <Select style={{ width: 80 }}>
                                <Option value="all">全部</Option>
                                <Option value="on">进行中</Option>
                                <Option value="on-end">进行中（临时锁车）</Option>
                                <Option value="end">行程结束</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                            查询
                            </Button>
                        <Button type="default" className="login-form-button">
                            重置
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


export default Form.create()(BaseOrder)