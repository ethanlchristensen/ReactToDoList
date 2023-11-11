import { Card, Text } from '@radix-ui/themes';

export default function SimpleToDoItem({ title }) {
    return (
        <div className='mb-2'>
            <Card variant='surface'>
                <Text as='div' size='2' weight='bold'>
                    {title}
                </Text>
            </Card>
        </div>
    );
}