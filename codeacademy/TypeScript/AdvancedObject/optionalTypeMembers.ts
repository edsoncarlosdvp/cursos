interface OptionsType {
  name: string;
  size?: string;
}
 
function listFile(options: OptionsType) {
  let fileName = options.name;
 
  if (options.size) {
    fileName = `${fileName}: ${options.size}`;
  }
 
  return fileName;
}

listFile({ name: 'readme.txt' })
