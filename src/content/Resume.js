import React, { Component } from 'react';
import {Pagination} from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class Resume extends Component {

  topRow = {
    marginTop:'85px',
  }

  state = {
    file: './reinhardt_resume.pdf',
    currentPage: 1,
    numPages: null,
    page1Active: true,
    page2Active: false,
    page3Active: false,
    nextButtonDisabled:false,
    previousButtonDisabled:true
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  handlePaginationActive = (requestedPage) => {
    switch(requestedPage){
      case 1:
        this.setState({
          page1Active: true,
          page2Active: false,
          page3Active: false,
          nextButtonDisabled:false,
          previousButtonDisabled:true
        })
        break;
      case 2:
        this.setState({
          page1Active: false,
          page2Active: true,
          page3Active: false,
          nextButtonDisabled:false,
          previousButtonDisabled:false
        })
        break;
      case 3:
        this.setState({
          page1Active: false,
          page2Active: false,
          page3Active: true,
          nextButtonDisabled:true,
          previousButtonDisabled:false
        })
        break;
      default:
        this.setState({
          page1Active: true,
          page2Active: false,
          page3Active: false,
          nextButtonDisabled:false,
          previousButtonDisabled:true
        })
        break;
    }
  }

  onPageNext = () => {
    if(this.state.currentPage !== this.state.numPages) {
      this.setState({currentPage: this.state.currentPage + 1});
    }
  }

  onPageBack = () => {
    if(this.state.currentPage !== 1)
      this.setState({currentPage:this.state.currentPage-1});
  }

  onSpecificPage = (pageNumber) => {
    this.setState({currentPage:pageNumber});
  }

  render() {
    const { file, currentPage} = this.state;
    const paginationIndicatorsPrevious = {
      marginLeft:'27%'
    }


    return (
        <div className="container">
          <div style={this.topRow} className="row">
            <div className="col-sm">

            </div>
            <div className="col-sm">
              <Pagination>
                <Pagination.Prev style={paginationIndicatorsPrevious} onClick={() => {this.onPageBack();this.handlePaginationActive(this.state.currentPage-1)}} disabled={this.state.previousButtonDisabled}/>
                <Pagination.Item active={this.state.page1Active} onClick={() => {this.onSpecificPage(1);this.handlePaginationActive(1)}}>{1}</Pagination.Item>
                <Pagination.Item active={this.state.page2Active} onClick={() => {this.onSpecificPage(2);this.handlePaginationActive(2)}}>{2}</Pagination.Item>
                <Pagination.Item active={this.state.page3Active} onClick={() => {this.onSpecificPage(3);this.handlePaginationActive(3)}}>{3}</Pagination.Item>
                <Pagination.Next onClick={() => {this.onPageNext();this.handlePaginationActive(this.state.currentPage+1)}} disabled={this.state.nextButtonDisabled}/></Pagination>
            </div>
            <div className="col-sm">

            </div>
          </div>
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <Document
                file={file}
                onLoadSuccess={this.onDocumentLoadSuccess}
                options={options}>
                  <Page key={currentPage} pageNumber={currentPage}/>
              </Document>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
    );
  }
}