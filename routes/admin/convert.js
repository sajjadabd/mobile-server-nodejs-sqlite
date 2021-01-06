let fs = require('fs');

const convertLatexToJson = async (prevPathURL) => {

  const pathURL = prevPathURL + '.json';

  await fs.readFile( prevPathURL , 'utf8' , async (err, data) => {

    

    if (err) {
      console.error(err)
      return;
    }

    let beginStr = 'begin{document}'
    let endStr = 'end{document}'
    
    let startIndex = data.search(beginStr);
    let endIndex = data.search(endStr);

    startIndex += beginStr.length;
    endIndex -= 1 ;

    data = data.slice(startIndex , endIndex)

    await fs.writeFile( pathURL , '' , 'utf8' , function (err) {
      if (err) return console.log(err);
      console.log('clear file...');
    });

    let numberOfSections = data.match(/section/g).length

    console.log(numberOfSections);

    var lines = data.split('\n');

    fs.appendFileSync( pathURL , '[ \n' , 'utf8' );

    let sectionCounter = 0;
    let insideLineCounter = 0;
    
    for(let i=0;i<lines.length;i++){


        
        //code here using lines[i] which will give you each line
        if ( lines[i].trim() == '\\section{}' ) {
          // fs.appendFile( pathURL , `\n } \n` , 'utf8' , function (err) {
          //   if (err) throw err;
          // });
          // fs.appendFile( pathURL , `\n { \n` , 'utf8' , function (err) {
          //   if (err) throw err;
          // });
          if( sectionCounter == 0 ) {
            fs.appendFileSync( pathURL , `{ \n` , 'utf8');
          } else if ( sectionCounter == numberOfSections  ) {
            fs.appendFileSync( pathURL , `} \n` , 'utf8');
          } else {
            fs.appendFileSync( pathURL , `} , \n` , 'utf8');
            fs.appendFileSync( pathURL , `{ \n` , 'utf8');
          }
          
          
          sectionCounter++;
          insideLineCounter = 0;
        }

        let theLine = lines[i].trim();

        if( sectionCounter == 1 ) {
          if( lines[i].trim() == '' ) {

          } else if ( lines[i].trim() == '\\section{}' ) {

          } else {
            console.log(insideLineCounter);
            if( insideLineCounter % 4 == 0) {
              fs.appendFileSync( pathURL , `\t \"branch\" : \"${theLine}\" , \n` , 'utf8' );
            } else if ( insideLineCounter % 4 == 1) {
              fs.appendFileSync( pathURL , `\t \"standard_name\" : \"${theLine}\" , \n` , 'utf8');
            } else if ( insideLineCounter % 4 == 2) {
              fs.appendFileSync( pathURL , `\t \"season_counter\" : \"${theLine}\" , \n` , 'utf8');
            } else if( insideLineCounter % 4 == 3) {
              fs.appendFileSync( pathURL , `\t \"season_title\" : \"${theLine}\" \n` , 'utf8');
            }
            insideLineCounter++;
          }
        } else {

          if( lines[i].trim() == '' ) {

          } else if ( lines[i].trim() == '\\section{}' ) {

          } else {
            if( insideLineCounter % 6 == 0) {
              fs.appendFileSync( pathURL , `\t \"level\" : \"${theLine}\" , \n` , 'utf8');
            } else if ( insideLineCounter % 6 == 1 ) {
              fs.appendFileSync( pathURL , `\t \"question\" : \"${theLine}\" , \n` , 'utf8' );
            } else if ( insideLineCounter % 6 == 2 ) {
              fs.appendFileSync( pathURL , `\t \"first\" : \"${theLine}\" , \n` , 'utf8' );
            } else if ( insideLineCounter % 6 == 3 ) {
              fs.appendFileSync( pathURL , `\t \"second\" : \"${theLine}\" , \n` , 'utf8' );
            } else if ( insideLineCounter % 6 == 4 ) {
              fs.appendFileSync( pathURL , `\t \"third\" : \"${theLine}\" , \n` , 'utf8' );
            } else if ( insideLineCounter % 6 == 5 ) {
              fs.appendFileSync( pathURL , `\t \"fourth\" : \"${theLine}\" \n` , 'utf8' );
              if ( sectionCounter == numberOfSections  ) {
                fs.appendFileSync( pathURL , `} \n` , 'utf8');
              }
            }
            insideLineCounter++;
          }
        }        
    }

    console.log(sectionCounter);

    fs.appendFileSync( pathURL , '\n]' , 'utf8' );
    
    fs.unlink( prevPathURL , () => {
      console.log('file deleted');
    });

    // console.log('this is path : ' + pathURL);
  })


  return pathURL;
  
}



module.exports = convertLatexToJson;