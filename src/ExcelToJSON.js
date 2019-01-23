import XLSX from 'xlsx';

import store from './store';

export default async function(fileUrl) {

      var reader = new FileReader();
      var fileBlob = await fetch(fileUrl);
      fileBlob = await fileBlob.blob();

      reader.onload = function(e) {
        console.log(e)

        var data = e.target.result;
        var workbook = XLSX.read(data, {
          type: 'binary'
        });

        // workbook.SheetNames.forEach(function(sheetName) {
        //   // Here is your object
        //   var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        //   var json_object = JSON.stringify(XL_row_object);
        // })
        store.dispatch({type:'WORKBOOK_IMPORT_SUCCESS', payload:workbook});
      };

      reader.onerror = function(ex) {
        store.dispatch({type:'WORKBOOK_IMPORT_FAIL', payload:ex});
      };


      reader.readAsBinaryString(fileBlob);

  };
