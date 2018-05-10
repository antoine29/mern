/*
//React
var contentNode = document.getElementById('contents');
var component = <h1>Hello World</h1>;
var component2 = <h2>Hello World</h2>;
ReactDOM.render(component, contentNode);

//ES2015
const contentNode = document.getElementById('contents');

const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe' ];
const message = continents.map(c => `Hello ${c}! \n aaa`).join(' ');

const component = <p>{message}</p>;

//const salto = <br />;

//ReactDOM.render(component, salto, contentNode);
ReactDOM.render(component, contentNode);
*/

//sweetAlert
//IssueList

import IssueList from './IssueList.jsx';
//import IssueAdd from './IssueAdd.jsx';

const contentNode = document.getElementById('contents');

const issues = [];
/*
const issues = [
  {id:1, status: 'Open', owner: 'Ravan',
  created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
  tittle: 'Error in console when clicking add'},
  {id:2, status: 'Assigned', owner: 'Eddie',
  created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
  tittle: 'Missing bottom border on panel'}
];
*/

//const ver = ['hi', 'antoine', 'wasting', 'time', 'again?'];
/* 
class IssueFilter extends React.Component{
  render(){
    return(
      <div>This is a placeholder for the issue filter.</div>
    )
  }
}
 */

/*
class IssueAdd extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var form = document.forms.IssueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      tittle: form.tittle.value,
      status: 'New',
      created: new Date()
    });
    form.owner.value = "";
    form.tittle.value = ""; //clear values after an addition

  }

  render(){
    return(
      <div>
        <form name="IssueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="tittle" placeholder="Tittle" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}
*/

// class IssueRow extends React.Component{
//   render(){
//       /*
//        data.records.forEach(issue => {
//          issue.created = new Date(issue.created);
//          if (issue.completionDate) issue.completionDate = new Date(issue.completionDate);
//        });
//        */
//      //const borderedStyle = {border: "1px solid silver", padding: 4};
//      const issue = this.props.issue;
   
//      return(
//        <tr>
//          <td>{issue._id}</td>
//          <td>{issue.status}</td>
//          <td>{issue.owner}</td>
//          <td>{issue.created.toDateString()}</td>
//          <td>{issue.effort}</td>
//          {/* <td>{"hey wspp my nigga"}</td> */}
//          <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>        
//          <td>{issue.title}</td>
//          {/*using children */}
//          {/* <td style={borderedStyle}>{this.props.children}</td> */}
//          {/*
//          //using properties
//          //comentario salvaje
//          <td style={borderedStyle}>{this.props.issue_id}</td>
//          <td style={borderedStyle}>{this.props.issue_tittle}</td>
//           */}
//        </tr>
//      )
//   }
// }

// class IssueTable extends React.Component{
//   render(){
//       const issueRows = this.props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />);
//       //issueRows.forEach(element => {console.log("=> " + toString(element.completionDate));});    
//       //issueRows.forEach(element => {console.log("=> " + this.props.issue.owner)});
  
//       const borderedStyle= {border: "1px solid silver", padding: 6};
//       return(
//         <table className="bordered-table">
//           <thead>
//             <tr>
//               <th style={borderedStyle}>Id</th>
//               <th style={borderedStyle}>Status</th>
//               <th style={borderedStyle}>Owner</th>
//               <th style={borderedStyle}>Created</th>
//               <th style={borderedStyle}>Effort</th>
//               <th style={borderedStyle}>Completition</th>
//               <th style={borderedStyle}>Tittle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {issueRows}
//             {/*
//             //using children
//             <IssueRow issue_id={1}> Error en console when clicking add </IssueRow>
//             <IssueRow issue_id={2}> Missing bottom <b>border</b> on panel </IssueRow>
//             */}
//             {/*
//             //using properties
//             <IssueRow issue_id={1} issue_tittle="Error in console when clicking Add" />
//             <IssueRow issue_id={2} issue_tittle="Missing bottom border panel" />
//             */}
//           </tbody>
//         </table>
//       )
//   }
// }

// class IssueList extends React.Component{
//   constructor(){

//     super();
//     this.state = { issues: []};

//     this.createIssue = this.createIssue.bind(this);

//   }

//   componentDidMount(){
//     this.loadData();
//   }

//   loadData(){
//     fetch('/api/issues').then(response => {
//       if (response.ok) {
//         response.json().then(data => {
//           console.log("Total count of records: ", data._metadata.total_count);  

//           data.records.forEach(issue => {
//             issue.created = new Date(issue.created);
//             if(issue.completionDate) issue.completionDate = new Date(issue.completionDate);
//           });
             
//           this.setState({ issues: data.records });
//         });
             
//       }
//       else {
//         response.json().then(error => {
//           alert("Failed to fetch issues: " + error.message)
//         });
//       }
//     }).catch(err => {
//       alert("Error in fetching data from server: ", err);
//     });
//   }
  
//   createIssue(newIssue){
//     fetch('/api/issues',{
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newIssue)
//     }).then(response => {
//       if(response.ok){
//         response.json().then(updatedIssue => {
//           updatedIssue.created = new Date(updatedIssue.created);
//           if (updatedIssue.completionDate) updatedIssue.completionDate = new Date(updatedIssue.completionDate);
//           const newIssues = this.state.issues.concat(updatedIssue);
//           this.setState({ issues: newIssues});
//         });
//       }
//       else{
//         response.json().then(error => {
//           alert("Failed to add issue: "+ error.message);
//         });
//       }
//     }).catch(err => {
//       alert("Error in sending data to server: " + err.message);
//     });
//   }

//   render(){
//     return(
//       <div>
//         <h1>Issue Tracker</h1>
//         <IssueFilter />
//         <hr />
//         {/* <IssueTable issues={issues} /> */}
//         <IssueTable issues={this.state.issues} />
//         <hr />
//         <IssueAdd createIssue={this.createIssue} />
//       </div>
//     );
//   }
// }

ReactDOM.render(<IssueList />, contentNode);