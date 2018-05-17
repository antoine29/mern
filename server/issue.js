//OLD
// 'use strict';

//error handling
const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true
};

const issueFieldType = {
  //id: 'required',
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completitionDate: 'optional',
  title: 'required'
};

function cleanupIssue(){
  const cleanedUpIssue = {};
  Object.keys(issue).forEach( field => {
    if(issueFieldType[field]) cleanedUpIssue[field] = issuep[field];
  });
  return cleanedUpIssue;
}

function validateIssue(){
  const errors = [];
  Object.keys(issueFieldType).forEach(field => {
    if(issuesFieldType[field] === 'required' && !issue[field]) errors.push(`Missing mandatory field: ${field}`);
  });

  if(!validIssueStatus[issue.status]) errors.push(`${issue.status} is not a valid status.`);
   
  return (errors.length ? errors.join('; ') : null);
}

/* function validateIssue(issue){
  for (const field in issueFieldType) {
    const type = issueFieldType[field];
    if (!type) delete issue[field];
    else {
      if (type === 'required' && !issue[field]) return `${field} is required.`;
    }
  }
  if(!validIssueStatus[issue.status]) return `${issue.status} is not a valid status.`;

  return null;
}
 */

// module.exports = {
//     validateIssue: validateIssue
// };

export default {
  // validateIssue: validateIssue
  validateIssue,
  cleanupIssue,
}
 //end error handling */