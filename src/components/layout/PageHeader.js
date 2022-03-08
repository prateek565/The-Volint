import { Link } from '@material-ui/core';
import React from 'react';

const PageHeader = ({title,content,breadcrumb,className}) => {
    return (
        <div className="page-header-area">
            <div className="page-header-area-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="page-header-content-inner">
                                <div className="page-header-content">
                                    <h2>{title}</h2>
                                    <div>{content}</div>
                                    <div className="breadcrumb-wrapper">
                                        <span><Link exact to={'/'} title="Homepage"><i className="ti ti-home" />&nbsp;&nbsp;Home</Link></span>
                                        <span className="bread-sep">&nbsp;/&nbsp;</span>                                        
                                        {breadcrumb}
                                    </div>
                                    <div className={className}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;