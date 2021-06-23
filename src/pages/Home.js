import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DataActions from '../reducer/DataRedux'

import '../css/App.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    this.props.dataRequest()
  }

  static getDerivedStateFromProps (props, state) {
    let returnObj = {}
    if (props.data) {
      returnObj = {
        ...returnObj,
        data: props.data
      }
    }
    return returnObj
  }

  onDeleteClick = (id) => {
    this.props.deleteRequest(id)
    window.location.reload()
  }

  render () {
    const { data } = this.state
    return (
      <div className='outer-container'>
        <span>
          <h1 className='margin-h1 align-center'>PAYMENT HISTORY</h1>
        </span>
        <div className='inner-container'>
            <Link to='/add-new' style={{ textDecoration: 'none' }}>
                <div className='btn-add-new btn-m'>
                    + Add New
                </div>
            </Link>
          <div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Total</th>
                  <th>Balance</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(data)
                  ? data.map(row => {
                      return (
                        <tr key={row.id}>
                          <td>{row.id}</td>
                          <td>{row.type}</td>
                          <td>{row.title}</td>
                          <td>Rp. {row.total}</td>
                          <td>Rp. {row.balance}</td>
                          <td>{moment(row.deliver_date).format('YYYY-MM-DD')}</td>
                          <td>
                            <div className='btn-delete btn-s' onClick={() => this.onDeleteClick(row.id)}>DELETE</div>
                          </td>
                        </tr>
                      )
                    })
                  : null}
              </tbody>
            </table>
            {/* <ul className='align-right'>
            <ReactPaginate
              previousLabel='Previous'
              nextLabel='Next'
              breakLabel='...'
              breakClassName='break-me'
              pageCount={this.props.pageCount / 10}
              forcePage={this.state.currentPage}
              marginPagesDisplayed={1}
              pageRangeDisplayed={4}
              onPageChange={this.handlePageClick}
              containerClassName='pagination'
              subContainerClassName='pages-pagination'
              activeClassName='active'
            />
          </ul> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data.data
})

const mapDispatchToProps = dispatch => {
  return {
    dataRequest: () => dispatch(DataActions.dataRequest()),
    deleteRequest: (id) => dispatch(DataActions.deleteRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
