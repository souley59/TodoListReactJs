import React from 'react';

const backgroundFooter = {
    
    width: '100%',
    background: 'rgb(42, 72, 107)',
    background: '-moz-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: 'linear-gradient(to right, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2a486b", endColorstr="#507aa7", GradientType=1)',
    marginBottom:'0',
    position:'relative',
}

function Footer() {


    return (
        <footer className="page-footer font-small  daken-3" style={backgroundFooter}>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 py-2">
                <div className="mb-5 flex-center">
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="pin-ic">
                    <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
              </div>
                      </div>
          </div>
          <div className="footer-copyright text-center py-2">© 2020 Copyright:
            <a href="https://ToDoList.com/"> ToDoList.com</a>
          </div>
        </footer>

    );

}

export default Footer;


