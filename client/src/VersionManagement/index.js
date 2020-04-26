import React from "react";
import Model from "./model";
import AddItemForm from "./model-views/AddItemForm";
import VersionList from "./model-views/VersionList";
import LoadingComponent from './components/LoadingComponent';
import * as s from "./style";
import { observer } from "mobx-react";

@observer
class VersionManagement extends React.Component {
  constructor(props) {
    super(props);
    this.model = new Model();
  }
  componentDidMount() {
    this.model.actions.fetchLists();
  }
  render() {
    const { loading } = this.model.store;
    return (
      <div className={s.versionManagementRoot}>
        <div className="header">Version Management System</div>
        {loading ? <LoadingComponent /> : (
          <React.Fragment>
            <VersionList model={this.model} />
            <AddItemForm model={this.model} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default VersionManagement;
