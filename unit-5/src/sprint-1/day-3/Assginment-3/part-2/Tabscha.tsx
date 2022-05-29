
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// // // @chakra-ui/react
import "./Tabs.css"

function Tabscha() {
  return (
      
      <div className="container">
        <Tabs>
          <TabList>
            <Tab className="tabBtn">One</Tab>
            <Tab className="tabBtn">Two</Tab>
            <Tab className="tabBtn">Three</Tab>
          </TabList>
  
          <TabPanels>
            <TabPanel>
                <div><h1>First Tab Opened</h1></div>
            </TabPanel>
            <TabPanel>
            <div><h1>Second Tab Opened</h1></div>
            </TabPanel>
            <TabPanel>
            <div><h1>Third Tab Opened</h1></div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
  )
}

export default Tabscha