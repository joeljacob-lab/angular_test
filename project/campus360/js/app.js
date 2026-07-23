var app = angular.module("campus360", []);

app.controller("dashboardController", function ($scope) {
  $scope.collegename = "FISAT";
  $scope.collegeId = "FISAT-2026";
  $scope.totalstudents = 1200;
  $scope.totalfaculty = 85;

  $scope.students = ["Shahid", "John", "Allen", "Shaun"];
  $scope.showstudents = true;

  $scope.fees = 2500;
  $scope.today = new Date();

  $scope.departments = ["CSE", "MCA", "MBA", "EEE", "ECE"];
  $scope.selectedDepartment = "CSE";

  // Actions
  $scope.addStudent = function () {
    $scope.totalstudents++;
  };

  $scope.isDisable = true;
  $scope.isReadOnly = true;

  $scope.allowAdmission = function () {
    $scope.isDisable = !$scope.isDisable;
  };
});