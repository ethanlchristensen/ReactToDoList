import { DeleteIcon, EditIcon } from 'lucide-react';
import { Card, Text, Checkbox, Flex, Button } from '@radix-ui/themes';

export default function ToDoItem({ title, description, isCompleted }) {
    return (
        <div className='mb-2'>
            <Card variant='surface'>
                <Text as='div' size='2' weight='bold'>
                    {title}
                </Text>
                <Text as='div' color='gray' size='2'>
                    {description}
                </Text>
                <div className='mt-2'>
                    <Flex gap='2' align='center' justify='between'>
                        <Text as='label' size='2'>
                            <Flex gap='2'>
                                <Checkbox size='2' value={isCompleted} /> Completed?
                            </Flex>
                        </Text>
                        <Flex gap='2' align='center'>
                            <Button variant='surface' size='1' color='orange'>
                                <EditIcon size='15' />
                            </Button>
                            <Button variant='surface' size='1' color='red'>
                                <DeleteIcon size='15' />
                            </Button>
                        </Flex>
                    </Flex>
                </div>
            </Card>
        </div>
    );
}