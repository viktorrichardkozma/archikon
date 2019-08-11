import React from 'react';
import { connect } from 'react-redux';


class Menu extends React.Component {

  render() {
    const {language} = this.props;

    return (
      <div >
      {(language.lang==='hu') ? 'az oldal nem létezik' : 'not found'}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.localization
  };
};

export default connect(mapStateToProps, {})(Menu);
