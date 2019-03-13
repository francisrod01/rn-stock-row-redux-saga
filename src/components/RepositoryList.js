import React from "react";

import { View, Text, Button } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RepositoriesActions from "../store/reducers/repositories";

const styles = {
  container: {
    flex: 1,
    background: "#7159c1",
    justifyContent: "center",
    alignItems: "center"
  },
  repo: {
    padding: 10,
    margin: 10,
    borderRadius: 4,
    borderWidth: 1
  }
};

const RepositoryList = ({ repositories, addRepositoryRequest }) => (
  <View style={styles.container}>
    {repositories.data.map(repository => (
      <View style={styles.repo} key={`${repository.id}-${Date.now()}`}>
        <Text>{repository.name}</Text>
        <Text>{repository.description}</Text>
      </View>
    ))}

    <Button
      title={"Add repo"}
      onPress={() => addRepositoryRequest("facebook/react")}
    />
  </View>
);

const mapStateToProps = state => ({
  repositories: state.repositories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);
