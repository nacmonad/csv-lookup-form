import { call, put, takeEvery } from 'redux-saga/effects';
import { Document, Paragraph, Packer } from 'docx';

import prettyjson from 'prettyjson';
import download from 'downloadjs';



const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function createAndDownloadFile(parsedFormObj) {
  try {

    const fileText = prettyjson.render(parsedFormObj, {
      keysColor: 'rainbow',
      dashColor: 'magenta',
      stringColor: 'white'
    });
    const doc = new Document();
    const paragraph = new Paragraph(fileText);
    doc.addParagraph(paragraph);

    const packer = new Packer();
    const b64string = await packer.toBase64String(doc)
    return await download(fileText, `${parsedFormObj.clientName}.docx`, "text/plain");
    // const docDefinition = {
    //   content: [
    //     {
    //     	text: fileText,
    //     	pageBreak: 'after'
    //     }
    //   ]
    // }
    //
    //
    // return await window.pdfMake.createPdf(docDefinition).download();
  } catch (e) {
    console.log(e)
    throw e
  }
}

function* handleFormDownloadSaga(action) {
  console.log("DO SOME ASYNC STUFF BRUGH!")
  try {
    // let docx = officegen ( {
    //   type: 'docx',
    //   creator:'functional-aesthetics.design'
    // } );
    // let res = docx.generate(action.payload);
    // console.log(res)

    yield call(createAndDownloadFile, action.payload)
    yield put({type:"DOWNLOAD_FORM_SUCCESS" })

  } catch (e) {
    yield put({type:"DOWNLOAD_FORM_FAIL", payload:e})
    console.log(e);
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* downloadFormRequestedSaga() {
  yield takeEvery('DOWNLOAD_FORM_REQUESTED', handleFormDownloadSaga)
}
