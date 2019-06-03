import React from 'react';

 function App(){ // this needs to be upper case
  const courses = [
      {
      id: 1, title: "Clean Code"
      },
      {
      id : 2, title : "React Fundamentals"
      }];
    return( 
        <>
            <h1>Courses</h1>
            <table><thead><tr><th>ID</th><th>Course</th></tr></thead><tbody>
            { courses.map(course => renderTitle(course)) }
            </tbody></table>
        </>
    
    );

}

function renderTitle(course){
    return <tr key={course.id}><td>{course.id}</td>
               <td>{course.title}</td></tr>;
}

export default App;