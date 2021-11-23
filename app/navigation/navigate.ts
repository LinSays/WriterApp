/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */

/* push */

const openSignUp = (navigation) => (props = {}) => {
  navigation.push("SignUp", props);
};
const openSignIn = (navigation) => (props = {}) => {
  navigation.push("SignInScreen", props);
};
const openForgotPwd = (navigation) => (props = {}) => {
  navigation.push("ForgotPwd", props);
};
const openForgotPwdNew = (navigation) => (props = {}) => {
  navigation.push("ForgotPwdNew", props);
};
const openSignInOther = (navigation) => (props = {}) => {
  navigation.push("SignInOther", props);
};
const openMainPage = (navigation) => (props = {}) => {
  navigation.push("AppStack", props);
};
const openProfileEdit = (navigation) => (props = {}) => {
  navigation.push("ProfileEdit", props);
};
const openLanguageSetting = (navigation) => (props = {}) => {
  navigation.push("LanguageSetting", props);
};
const openPrivacyPolicy = (navigation) => (props = {}) => {
  navigation.push("PrivacyPolicy", props);
};
const openFeedback = (navigation) => (props = {}) => {
  navigation.push("Feedback", props);
};
const openNewMovie = (navigation) => (props = {}) => {
  navigation.push("NewMovie", props);
};
const openMovieList = (navigation) => (props = {}) => {
  navigation.push("MovieList", props);
};
const openMovieDetail = (navigation) => (props = {}) => {
  navigation.push("MovieDetail", props);
};
const openEditMovie = (navigation) => (props = {}) => {
  navigation.push("EditMovie", props);
};
const openMoviePlay = (navigation) => (props = {}) => {
  navigation.push("MoviePlay", props);
};
const openMovieActScreen = (navigation) => (props = {}) => {
  navigation.push("MovieAct", props);
};
const openMovieSceneScreen = (navigation) => (props = {}) => {
  navigation.push("MovieScene", props);
};

const openNewSeries = (navigation) => (props = {}) => {
  navigation.push("NewSeries", props);
};
const openSeriesList = (navigation) => (props = {}) => {
  navigation.push("SeriesList", props);
};
const openSeriesDetail = (navigation) => (props = {}) => {
  navigation.push("SeriesDetail", props);
};
const openEditSeries = (navigation) => (props = {}) => {
  navigation.push("EditSeries", props);
};
const openSeriesPlay = (navigation) => (props = {}) => {
  navigation.push("SeriesPlay", props);
};
const openSeriesActScreen = (navigation) => (props = {}) => {
  navigation.push("SeriesAct", props);
};
const openSeriesSeasonScreen = (navigation) => (props = {}) => {
  navigation.push("SeriesSeason", props);
};
const openSeriesSceneScreen = (navigation) => (props = {}) => {
  navigation.push("SeriesScene", props);
};

const openNewBook = (navigation) => (props = {}) => {
  navigation.push("NewBook", props);
};
const openBookList = (navigation) => (props = {}) => {
  navigation.push("BookList", props);
};
const openBookDetail = (navigation) => (props = {}) => {
  navigation.push("BookDetail", props);
};
const openEditBook = (navigation) => (props = {}) => {
  navigation.push("EditBook", props);
};
const openBookPlay = (navigation) => (props = {}) => {
  navigation.push("BookPlay", props);
};
const openBookActScreen = (navigation) => (props = {}) => {
  navigation.push("BookAct", props);
};
const openBookSceneScreen = (navigation) => (props = {}) => {
  navigation.push("BookScene", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openSignUp: navigateOneTime(openSignUp(navigation)),
  openSignIn: navigateOneTime(openSignIn(navigation)),
  openForgotPwd: navigateOneTime(openForgotPwd(navigation)),
  openForgotPwdNew: navigateOneTime(openForgotPwdNew(navigation)),
  openSignInOther: navigateOneTime(openSignInOther(navigation)),
  openMainPage: navigateOneTime(openMainPage(navigation)),
  openProfileEdit: navigateOneTime(openProfileEdit(navigation)),
  openLanguageSetting: navigateOneTime(openLanguageSetting(navigation)),
  openPrivacyPolicy: navigateOneTime(openPrivacyPolicy(navigation)),
  openFeedback: navigateOneTime(openFeedback(navigation)),
  openNewMovie: navigateOneTime(openNewMovie(navigation)),
  openMovieList: navigateOneTime(openMovieList(navigation)),
  openMovieDetail: navigateOneTime(openMovieDetail(navigation)),
  openEditMovie: navigateOneTime(openEditMovie(navigation)),
  openMoviePlay: navigateOneTime(openMoviePlay(navigation)),
  openMovieActScreen: navigateOneTime(openMovieActScreen(navigation)),
  openMovieSceneScreen: navigateOneTime(openMovieSceneScreen(navigation)),

  openNewSeries: navigateOneTime(openNewSeries(navigation)),
  openSeriesList: navigateOneTime(openSeriesList(navigation)),
  openSeriesDetail: navigateOneTime(openSeriesDetail(navigation)),
  openEditSeries: navigateOneTime(openEditSeries(navigation)),
  openSeriesPlay: navigateOneTime(openSeriesPlay(navigation)),
  openSeriesActScreen: navigateOneTime(openSeriesActScreen(navigation)),
  openSeriesSeasonScreen: navigateOneTime(openSeriesSeasonScreen(navigation)),
  openSeriesSceneScreen: navigateOneTime(openSeriesSceneScreen(navigation)),

  openNewBook: navigateOneTime(openNewBook(navigation)),
  openBookList: navigateOneTime(openBookList(navigation)),
  openBookDetail: navigateOneTime(openBookDetail(navigation)),
  openEditBook: navigateOneTime(openEditBook(navigation)),
  openBookPlay: navigateOneTime(openBookPlay(navigation)),
  openBookActScreen: navigateOneTime(openBookActScreen(navigation)),
  openBookSceneScreen: navigateOneTime(openBookSceneScreen(navigation)),
});

export default navigate;
