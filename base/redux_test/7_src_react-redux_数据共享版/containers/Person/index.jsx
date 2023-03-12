import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

	addPerson = ()=>{
		const name = this.nameNode.value
		const age = this.ageNode.value
		const personObj = {id:nanoid(),name,age}
		const {addPerson} = this.props;
		addPerson(personObj)
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<div>
				<h2>我是Person组件,上方组件求和为{this.props.he}</h2>
				<input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
				<input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.persons.map((p)=>{
							return <li key={p.id}>{p.name}--{p.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({persons:state.persons,he:state.sum})
const mapDispatchToProps = {addPerson:createAddPersonAction}

/**
 * redux是前端的状态管理器
 * 相当于后端的数据库
 * mapStateToProps 用于读取状态 相当于数据库的Read
 * mapDispatchToProps 用于修改状态 相当于数据库的Create/Update/Delete
 */
export default connect(
	mapStateToProps,//映射状态
	mapDispatchToProps//映射操作状态的方法
)(Person)
