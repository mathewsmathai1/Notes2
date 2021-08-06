module.exports = function (app) {
  app.dataSources.mysql.automigrate();
  //console.log(Note.app);

  // ds.createModel(schema_v1.name, schema_v1.properties, schema_v1.options);

  // ds.automigrate(function () {
  //   ds.discoverModelProperties("betterNote", function (err, props) {
  //     console.log(props);
  //   });
  // });
};
