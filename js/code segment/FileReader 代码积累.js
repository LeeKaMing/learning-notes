
  getFileContent = (file, callback) => {
    let reader = new window.FileReader()
    reader.onloadend = evt => {
      if (evt.target.readyState == FileReader.DONE) {
        callback(evt.target.result)
      }
    }
    reader.readAsText(file)
  }

  handleFileSelect = e => {
    const file = e.target.files[0]
    if (!file) return false
    this.getFileContent(file, res => {
      // callback 业务逻辑
    })
  }

  <input type='file' accept='application/json' onChange={this.handleFileSelect} />
