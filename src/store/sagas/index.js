import { all, takeEvery } from "redux-saga/effects";

import { RepositoriesTypes } from "../reducers/repositories";
import { addRepository } from "./repositories";

export default function* rootSaga() {
  yield all([
    takeEvery(RepositoriesTypes.ADD_REPOSITORY_REQUEST, addRepository)
  ]);
}
