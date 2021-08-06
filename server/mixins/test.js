module.exports = function (Model, options) {
  //console.log(options.message);
  Model.observe("before save", function event(Model, next) {
    //Observe any insert/update event on Model
    console.log(Model.instance);
    Model.instance.betterTitle = "Changed Before Save";
    next();
  });
};
