
apiURLBase="http://intranet.aventador.softwareshinobi.digital:28888"

//##apiURLBase="http://localhost:8888"

function setProject(projectID, projectName) {

    console.log("enter > setProject");

    console.log("projectID / ", projectID);

    console.log("projectName / ", projectName);

    // console.log("apiProjectID / before / ", Cookies.get('apiProjectID') );

    // console.log("apiProjectName / before / ", Cookies.get('apiProjectName') );

    Cookies.set('apiProjectID', projectID);

    Cookies.set('apiProjectName', projectName);

    console.log("apiProjectID / after / ", Cookies.get('apiProjectID') );

    console.log("apiProjectName / after / ", Cookies.get('apiProjectName') );

}

function projectID() {

    // console.log("FETCH / projectID");

    // console.log("apiProjectID / before / ", Cookies.get('apiProjectID') );

    currentProjectID=Cookies.get('apiProjectID');

    // console.log("currentProjectID / ", currentProjectID);

    return currentProjectID;

}

function projectName() {

    // console.log("FETCH / projectName");

    // console.log("apiProjectName / ", Cookies.get('apiProjectName') );

    apiProjectName=Cookies.get('apiProjectName');

    // console.log("apiProjectName / ", apiProjectName);

    return apiProjectName;

}

function setViewStoryID(storyID) {

	// console.debug("enter > setViewStoryID");	

	// console.debug("    viewStoryID / ", Cookies.get('viewStoryID'));	

}

function setViewStoryID(storyID) {

    return Cookies.get('viewStoryID');

}

function setEditStoryID(storyID) {

	// console.debug("enter > setEditStoryID");	

	// console.debug("    storyID / ", storyID);	

	// console.debug("    cookie / old / ", Cookies.get('editStoryID'));

    Cookies.set('editStoryID', storyID);

	// console.debug("    cookie / new / ", Cookies.get('editStoryID'));

}

function editStoryID() {

    return Cookies.get('editStoryID');

}
