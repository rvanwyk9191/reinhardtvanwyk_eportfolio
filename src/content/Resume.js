import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class Resume extends Component {
  state = {
    file: './reinhardt_resume.pdf',
    currentPage: 1,
    numPages: null,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onPageNext = () => {
    if(this.state.currentPage != this.state.numPages)
      this.setState({currentPage:this.state.currentPage+1});
  }

  onPageBack = () => {
    if(this.state.currentPage != 1)
      this.setState({currentPage:this.state.currentPage-1});
  }

  render() {
    const { file, currentPage, numPages } = this.state;
    const fileAlignment = {
      textAlign:'center',
      display:'block'
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button type="button" className="btn btn-dark" onClick={this.onPageBack}>Back</button>
              <button type="button" className="btn btn-dark" onClick={this.onPageNext}>Next</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <Document
                  style={fileAlignment}
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