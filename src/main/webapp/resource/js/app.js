
class App {
    static BASE_URL_EMPLOYEE = "http://localhost:8080/api/employees";
    static BASE_URL_EMPLOYEETYPE = "http://localhost:8080/api/employee-types";
    static BASE_URL_DEPARTMENT = "http://localhost:8080/api/departments";
    static BASE_URL_POSITION = "http://localhost:8080/api/positions";


    static showDeleteConfirmDialog() {
        return Swal.fire({
            icon: 'warning',
            text: 'Are you sure you want to delete the selected data ?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it !',
            cancelButtonText: 'Cancel',
        })
    }

    static showSuccessAlert(t) {
        Swal.fire({
            icon: 'success',
            title: t,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
        })
    }

    static showErrorAlert(t) {
        Swal.fire({
            icon: 'error',
            title: 'Warning',
            text: t,
        })
    }
}

class Employee {
    constructor(id, avatar, fullName, dob, gender, email, phone, address, workResume, employeeType, department, position) {
        this.id = id;             //0
        this.avatar = avatar;      //1
        this.fullName = fullName;   //2
        this.dob = dob;               //3
        this.gender = gender;           //4
        this.email = email;              //5
        this.phone = phone;                 //6
       this.address = address;                //7
       this.workResume = workResume;           //8
       this.employeeType = employeeType;          //9
       this.department = department;                //10
       this.position = position;                       //11
    }
}
