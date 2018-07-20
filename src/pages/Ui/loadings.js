import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Loadings extends React.Component {
    render() {
        return (
            <div>
                <Card title='Spin 用法' className='card-wrap'>
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin indicator={antIcon} />
                </Card>
                <Card title='内容遮罩' className='card-wrap'>
                    <Spin spinning={false}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                            style={{marginBottom:'10px'}}
                        />
                    </Spin>
                    <Spin spinning={true}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                            style={{marginBottom:'10px'}}
                        />
                    </Spin>
                    <Spin tip="Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                            style={{marginBottom:'10px'}}
                        />
                    </Spin>
                    <Spin indicator={antIcon}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                            style={{marginBottom:'10px'}}
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}