interface About {
  general: {
    id: number;
    name: string;
    version: {
      versionNumber: number;
    }
  }
}

interface About {
  general: General;
}
 
interface General {
  id: number;
  name: string;
  version: Version;
}
 
interface Version {
  versionNumber: number;
}