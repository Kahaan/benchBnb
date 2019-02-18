import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { signup } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup",
  navLink: <Link to="/login">Login instead</Link>
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
