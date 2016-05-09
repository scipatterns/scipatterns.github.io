(function () {


    app.controller("myCtrl", function ($scope) {


        $scope.top_dir =tree;


        $scope.active_1 = "Home";
        $scope.active_sub = false;
        $scope.package_active = false;
        $scope.topic_active = false;
        $scope.sub_topic_active = false;
        $scope.base_active = false;


        $scope.active_1_set = function (file_name) {
            $scope.active_1 = file_name;
            $scope.active_sub = false;
            $scope.package_active = false;
            $scope.topic_active = false;
            $scope.sub_topic_active = false;
            $scope.base_active = false;


        };
        $scope.active_sub_set = function (file_name) {

            $scope.active_sub = file_name;
            $scope.package_active = false;
            $scope.topic_active = false;
            $scope.sub_topic_active = false;
            $scope.base_active = false;


        };

        $scope.active_package_set = function (file_name) {
            $scope.package_active = file_name;
            $scope.topic_active = false;
            $scope.sub_topic_active = false;
            $scope.base_active = false;


        };
        $scope.active_topic_set = function (file_name) {
            $scope.topic_active = file_name;
            $scope.sub_topic_active = false;
            $scope.base_active = false;


        };
        $scope.active_sub_topic_set = function (file_name) {
            $scope.sub_topic_active = file_name;
            $scope.base_active = false;


        };
        $scope.active_base_set = function (file_name) {
            $scope.base_active = file_name;


        };


    });

}());