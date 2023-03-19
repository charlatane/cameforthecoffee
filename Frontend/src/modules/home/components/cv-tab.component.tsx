import React from "react";
import {
  Stack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { BioTab } from "../tabs/bio.tab";
import { EducationTab } from "../tabs/education.tab";
import { ExperienceTab } from "../tabs/experience.tab";
import { SkillsTab } from "../tabs/skills.tab";

interface CvTabComponentProps {}

export const CvTabComponent: React.FC<CvTabComponentProps> = (
  props: CvTabComponentProps
) => {
  return (
    <Box bg="white" textColor="black" fontWeight="bold">
      <Box minH="10vh"></Box>
      <Stack>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab color="black">Bio</Tab>
            <Tab color="black">Education</Tab>
            <Tab color="black">Experience</Tab>
            <Tab color="black">Skills</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BioTab />
            </TabPanel>
            <TabPanel>
              <EducationTab />
            </TabPanel>
            <TabPanel>
              <ExperienceTab />
            </TabPanel>
            <TabPanel>
              <SkillsTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};
