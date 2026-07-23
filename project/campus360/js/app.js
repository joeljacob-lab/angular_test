var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {
    $scope.collegename = "FisaT";
    $scope.totstu = 500;
    $scope.totfac = 49;
    $scope.showstulist = true;
    $scope.newStudentName = "";
    console.log("Dashboard controller is loaded.");

    $scope.students = [
        "Adrian", "Goutham", "Unnithan", "Josin"
    ];

    $scope.addStudent = function () {
        if ($scope.newStudentName && $scope.newStudentName.trim()) {
            $scope.students.push($scope.newStudentName.trim());
            $scope.newStudentName = "";
        }

        $scope.totstu++;
        $scope.showstulist = true;
    };

    $scope.addFaculty = function () {
        $scope.totfac++;
    };

    $scope.fees = 25000;
    $scope.today = new Date();

    $scope.departments = [
        "CSE", "MCA", "MBA", "ECE", "EEE"
    ];

    $scope.selectedDepartments = "MCA";

    $scope.isDisable = true;

    $scope.allowAdmission = function () {
        $scope.isDisable = false;
    };

    $scope.isReadOnly = true;
    $scope.toggleReadyOnly = function () {
        $scope.isReadOnly = !$scope.isReadOnly;
    };
});
