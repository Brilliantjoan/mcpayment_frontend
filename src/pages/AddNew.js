import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DataActions from '../reducer/DataRedux'

class AddNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      total: 0,
      type: ''
    }
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleTotalChange = event => {
    this.setState({
      total: event.target.value
    })
  }

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    })
  }

  handleSubmit = () => {
    const { title, total, type } = this.state
    const data = {
        title: title,
        total: total,
        type: type
    }
    this.props.submitRequest(data)
    this.props.dataRequest()
    this.props.history.push('/')
  }

  render () {
    const { title, total, type } = this.state

    return (
      <div>
        <div className='form-outer-container'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className='btn-add-new btn-m'>
              Back Home
            </div>
          </Link>
          <h2 className='margin-h1 align-center padding-top-xxl'>
            Create New Schedule
          </h2>

          <div>
            <label className='bold'>Title</label>
          </div>
          <div className='padding-bottom-m'>
            <div className='padding-top-xxs'>
              <input
                className='input'
                type='text' onChange={this.handleTitleChange}
                value={this.state.title}
                placeholder='Input Title'
              />
            </div>
          </div>

          <div>
            <label className='bold'>Total</label>
          </div>
          <div className='padding-bottom-m'>
            <div className='padding-top-xxs'>
              <input
                className='input'
                type='number' onChange={this.handleTotalChange}
                value={this.state.total}
                placeholder='Input Total'
              />
            </div>
          </div>

          <div>
            <label className='bold'>Type</label>
          </div>
          <div className='padding-bottom-m'>
            <div className='padding-top-xxs'>
              <input
                type='radio' name='type' onChange={this.handleTypeChange}
                value='income'
              />
              <label className='margin-left-xxs'>Income</label>
              <input
                type='radio' name='type' onChange={this.handleTypeChange}
                value='expense'
              />
              <label className='margin-left-xxs'>Expense</label>
            </div>
          </div>
    
          { type !== '' && title !== '' && total !== 0
            ? <div className='btn-m align-center btn-submit' onClick={this.handleSubmit}>
                Submit
            </div>
            : <div className='btn-disable' disabled>
                Submit
            </div>
          }

        </div>
      </div>
    )
  }
}

  
const mapDispatchToProps = dispatch => {
  return {
    dataRequest: () => dispatch(DataActions.dataRequest()),
    submitRequest: (payload) => dispatch(DataActions.submitRequest(payload))
  }
}

export default connect(null, mapDispatchToProps)(AddNew)
  