import XLSX from 'xlsx';

export const parseTableFromRange = (rangeString, sheet) => {
     const range = XLSX.utils.decode_range(rangeString);
     console.log(range)
     var activeTable = [];
     var result = [];
     var row;
     var rowNum;
     var colNum;
     //var range = XLSX.utils.decode_range(sheet['!ref']);
     for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
        row = [];
         for(colNum=range.s.c; colNum<=range.e.c; colNum++){
            var nextCell = sheet[
               XLSX.utils.encode_cell({r: rowNum, c: colNum})
            ];
            if( typeof nextCell === 'undefined' ){
               row.push(void 0);
            } else row.push(nextCell.v);
         }
         activeTable.push(row);
     }

     return activeTable;
}
