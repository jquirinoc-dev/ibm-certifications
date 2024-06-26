import axios from 'axios';


//Admin console section expand and collapse
export const handleExpand = ( setIsExpanded, isExpanded ) => {
  setIsExpanded(!isExpanded);
}

export const handleMessageVisibility = ( setErrorShow ) => {
  setErrorShow(false);
}

export const handleFileSelect = (e, setFile, setIsFileUploaded) => {
  setFile(e.target.files[0]);
  setIsFileUploaded(true);
}


