import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ContextMenu } from 'primereact/contextmenu'
import PropTypes from 'prop-types'

class IndexView extends React.Component {

  constructor() {
    super()
    this.state = {
			records: [],
			selectedRecord: null
    }
	}
	
  showRecord(record) {
    console.log(record)
  }

  deleteRecord(record) {
    let newList = [...this.state.records]
    newList = newList.filter(item => item.id !== record.id)
		this.setState({records: newList})
		console.log('Record deleted', record.id)
	}
	
	editRecord(record) {
		console.log('edit', record)
	}

	menu = [
		{ label: 'Show', icon: 'pi pi-fw pi-search', command: e => this.showRecord(this.state.selectedRecord) },
		{ label: 'Edit', icon: 'pi pi-fw pi-pencil', command: e => this.editRecord(this.state.selectedRecord) },
		{ label: 'Delete', icon: 'pi pi-fw pi-times', command: e => this.deleteRecord(this.state.selectedRecord) }
	]

  async componentDidMount() {
		const data = await this.props.requestAll()
		console.log(data)
    this.setState({ records: data });
  }

  render() {

    const dataColumns = this.props.tableHeaders.map(item => (
      <Column key={item.item} field={item.item} header={item.header} />
    ))

    return (
      <div>
				<ContextMenu 
					model={this.menu}
					ref={el => this.cm = el}
					onHide={() => this.setState({ selectedRecord: null })}
				/>
					<DataTable 
						value={this.state.records}
						contextMenuSelection={this.state.selectedRecord}
						onContextMenuSelectionChange={e => this.setState({ selectedRecord: e.value })}
						onContextMenu={e => this.cm.show(e.originalEvent)}
						resizableColumns={true}
						columnResizeMode='fit'
						responsive={true}
						onRowClick={e => this.showRecord(e.data)}
					>
            {dataColumns}
        </DataTable>
      </div>
    );
  }
}

IndexView.propTypes = {
	tableHeaders: PropTypes.array,
  requestAll: PropTypes.func
}

export default IndexView