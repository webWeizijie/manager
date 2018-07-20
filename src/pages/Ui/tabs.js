import React from 'react'
import { Card, message, Tabs, Icon } from 'antd'

const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    info = (e) => {
        message.info(`Hi，您选择了页签:${e}`);
    };
    tabs = (e) => {
        this.info(e)
    }
    render() {
        return (
            <div>
                <Card title='Tab页签' className='card-wrap'>
                    <Tabs defaultActiveKey="1" onTabClick={this.tabs}>
                        <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                        <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab带图标页签' className='card-wrap'>
                    <Tabs defaultActiveKey="1" onTabClick={this.tabs}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">
                            Tab 2
                        </TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">
                            Tab 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab可关闭卡片式页签' className='card-wrap'>
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>

        )
    }
}