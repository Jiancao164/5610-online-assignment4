import React from "react";
import LessonTabs from "./LessonTabs";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import modules from '../../reducers/modules'
import lessons from '../../reducers/lessons'
import ModuleListComponent from "./ModuleListComponent";
import TopicPill from "./TopicPill";
import topics from "../../reducers/topics";
import {findAllCourses, findCourse} from "../../services/CourseService";

const reducers = combineReducers({
    modules, lessons, topics
})

const store = createStore(reducers);

const CourseEditorComponent = ({hideEditor, match, courseId, moduleId, lessonId, topicId, history}) =>
    <Provider store={store}>
        <div className={"container-fluid"}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
                <a className="navbar-brand" href="#"><i onClick={() => {history.push("/")}} className="fas fa-window-close"/></a>
                <div className={"col-3"}>
                    <h1 className={"editor-title"}>Course Editor</h1>
                </div>
                <div className="collapse navbar-collapse col-8" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><h3>Build</h3></a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#"><h3>Pages</h3></a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#"><h3>Theme</h3></a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#"><h3>Store</h3></a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#"><h3>App</h3></a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#"><h3>Settings</h3></a>
                        </li>
                    </ul>
                </div>
                <div className={"float-right col-1"}>
                    <i className="fas fa-plus fa-2x"/>
                </div>
            </nav>

            <div className="row">
                <div className="col-3">
                    <ModuleListComponent
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}/>
                </div>
                <div className="col-9">
                    {moduleId &&
                    <LessonTabs
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}
                        lessonId={lessonId}/>}

                    {lessonId &&
                    <TopicPill
                        topicId={topicId}
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}
                        lessonId={lessonId}/>}
                </div>
            </div>
        </div>
    </Provider>
export default CourseEditorComponent
